import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class FingerprintPhone extends StatelessWidget {
  const FingerprintPhone({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/FingerprintPhone.svg');
}
