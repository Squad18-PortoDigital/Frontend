// src/components/certificates/CertificateGenerator.tsx
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface CertificateData {
  nomeAluno: string;
  nomeCurso: string;
  dataFinalizacao: string;
}

export class CertificateGenerator {
  static generateCertificateHTML(data: CertificateData): string {
    return `
      <div style="
        width: 1000px;
        height: 707px;
        padding: 0;
        background: #ffffff;
        font-family: 'Times New Roman', serif;
        position: relative;
        box-sizing: border-box;
        overflow: hidden;
      ">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Lavishly+Yours&display=swap');
          .lavishly-yours-regular {
            font-family: "Lavishly Yours", cursive;
            font-weight: 400;
            font-style: normal;
          }
        </style>
        <!-- Main border -->
        <div style="
          position: absolute;
          top: 30px;
          left: 30px;
          right: 30px;
          bottom: 30px;
          border: 4px solid #1e3a8a;
          background: #ffffff;
        ">
          <!-- Top left decorative corner -->
          <div style="
            position: absolute;
            top: -4px;
            left: -4px;
            width: 0;
            height: 0;
            border-left: 150px solid #1e3a8a;
            border-bottom: 150px solid transparent;
          ">
            <!-- Inner golden lines -->
            <div style="
              position: absolute;
              top: 15px;
              left: -135px;
              width: 0;
              height: 0;
              border-left: 6px solid #fbbf24;
              border-bottom: 120px solid transparent;
            "></div>
            <div style="
              position: absolute;
              top: 25px;
              left: -125px;
              width: 0;
              height: 0;
              border-left: 6px solid #fbbf24;
              border-bottom: 100px solid transparent;
            "></div>
          </div>
          
          <!-- Bottom right decorative corner -->
          <div style="
            position: absolute;
            bottom: -4px;
            right: -4px;
            width: 0;
            height: 0;
            border-right: 150px solid #1e3a8a;
            border-top: 150px solid transparent;
          ">
            <!-- Inner golden lines -->
            <div style="
              position: absolute;
              bottom: 15px;
              right: -135px;
              width: 0;
              height: 0;
              border-right: 6px solid #fbbf24;
              border-top: 120px solid transparent;
            "></div>
            <div style="
              position: absolute;
              bottom: 25px;
              right: -125px;
              width: 0;
              height: 0;
              border-right: 6px solid #fbbf24;
              border-top: 100px solid transparent;
            "></div>
          </div>
          
          <!-- Content container -->
          <div style="
            padding: 80px 100px;
            text-align: center;
            height: calc(100% - 160px);
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          ">
            <!-- Main title -->
            <h1 style="
              font-size: 64px;
              font-weight: bold;
              color: #1e3a8a;
              margin: 60px 0 40px 0;
              letter-spacing: 3px;
              text-transform: uppercase;
              font-family: 'Times New Roman', serif;
            ">
              CERTIFICADO
            </h1>
            
            <!-- Subtitle -->
            <p style="
              font-size: 20px;
              color: #1e3a8a;
              margin: 0 0 40px 0;
              text-transform: uppercase;
              letter-spacing: 1px;
              font-weight: normal;
            ">
              ESTE CERTIFICADO COMPROVA QUE
            </p>
            
            <!-- Student name -->
            <h2 class="lavishly-yours-regular" style="
              font-size: 48px;
              color: #1e3a8a;
              margin: 0 0 40px 0;
              line-height: 1.2;
            ">
              ${data.nomeAluno}
            </h2>
            
            <!-- Course description -->
            <div style="
              max-width: 700px;
              margin: 0 auto 60px auto;
            ">
              <p style="
                font-size: 18px;
                color: #1e3a8a;
                margin: 0;
                line-height: 1.6;
                text-align: center;
                font-weight: normal;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              ">
                CONCLUIU COM ÊXITO O CURSO <strong>SEGURANÇA DO TRABALHO</strong> MINISTRADO POR NOSSA INSTITUIÇÃO
                ENTRE O PERÍODO DE INÍCIO E ${data.dataFinalizacao} E DEMONSTROU DEDICAÇÃO E EMPENHO
                EXEMPLARES. PARABÉNS E BOA SORTE NO FUTURO. EMITIDO EM ${data.dataFinalizacao} PELA
                NOSSA PLATAFORMA.
              </p>
            </div>
            
            <!-- Signature section -->
            <div style="
              margin-top: auto;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            ">
              <!-- Signature line -->
              <div style="
                width: 300px;
                height: 2px;
                background: #1e3a8a;
                margin-bottom: 10px;
              "></div>
              
              <!-- Signature text -->
              <div style="text-align: center;">
                <p style="
                  font-size: 16px;
                  color: #1e3a8a;
                  margin: 0;
                  font-weight: bold;
                ">
                  Diretor Responsável
                </p>
                <p style="
                  font-size: 16px;
                  color: #1e3a8a;
                  margin: 5px 0 0 0;
                ">
                  Plataforma de Ensino
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static async downloadCertificate(data: CertificateData): Promise<void> {
    const certificateHTML = this.generateCertificateHTML(data);
    
    // Criar um elemento temporário
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = certificateHTML;
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '-9999px';
    document.body.appendChild(tempDiv);

    try {
      // Aguardar um pouco para o elemento ser renderizado
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const element = tempDiv.firstElementChild as HTMLElement;
      const canvas = await html2canvas(element, {
        backgroundColor: '#ffffff',
        scale: 2, // Melhor qualidade
        useCORS: true,
        allowTaint: true,
        width: 1000,
        height: 707,
      });
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });
      
      // Calcular dimensões para centralizar
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = doc.internal.pageSize.getHeight();
      const imgWidth = pdfWidth - 20; // Margem de 10mm de cada lado
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      const x = 10; // Margem esquerda
      const y = (pdfHeight - imgHeight) / 2; // Centralizar verticalmente
      
      doc.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight, '', 'FAST');
      
      // Nome do arquivo
      const fileName = `certificado-seguranca-trabalho-${data.nomeAluno.replace(/\s+/g, '-').toLowerCase()}.pdf`;
      doc.save(fileName);
      
    } catch (error) {
      console.error('Erro ao gerar certificado:', error);
      throw new Error('Falha ao gerar o certificado. Tente novamente.');
    } finally {
      // Remover elemento temporário
      document.body.removeChild(tempDiv);
    }
  }
}