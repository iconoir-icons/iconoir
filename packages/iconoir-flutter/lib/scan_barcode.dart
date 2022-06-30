import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ScanBarcode extends StatelessWidget {
  const ScanBarcode({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ScanBarcode.svg');
}
