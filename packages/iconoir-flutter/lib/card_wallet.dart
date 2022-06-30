import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CardWallet extends StatelessWidget {
  const CardWallet({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/CardWallet.svg');
}
