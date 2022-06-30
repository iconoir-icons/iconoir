import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TwitterVerifiedBadge extends StatelessWidget {
  const TwitterVerifiedBadge({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/TwitterVerifiedBadge.svg');
}
