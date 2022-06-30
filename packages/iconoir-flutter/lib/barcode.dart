import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Barcode extends StatelessWidget {
  const Barcode({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Barcode.svg');
}
