import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PrintingPage extends StatelessWidget {
  const PrintingPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/PrintingPage.svg');
}
